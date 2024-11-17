import cv2
import numpy as np

c1 = int(input("请输入低阈值（-1为默认）："))
c2 = int(input("请输入高阈值（-1为默认）："))

if c1 == -1:
    c1 = [35, 50, 50]
if c2 == -1:
    c2 = [95, 255, 255]

print(c1,"\n",c2)

#########################

# 打开默认的摄像头（通常是设备编号 0）
cap = cv2.VideoCapture(0)

# 检查摄像头是否成功打开
if not cap.isOpened():
    print("无法打开摄像头")
    exit()

while True:
    # 捕获视频流中的帧
    ret, frame = cap.read()
    
    # 如果未成功读取帧，则退出循环
    if not ret:
        print("无法读取视频帧")
        break

#####################

    # 读取图片
    image = frame

    # 转换为HSV色彩空间
    hsv = cv2.cvtColor(image, cv2.COLOR_BGR2HSV)

    # 设置深绿色阈值（根据实际情况调整这些值）
    # lower_green = np.array([35, 50, 50])  # 深绿色的低阈值
    # upper_green = np.array([85, 255, 255])  # 深绿色的高阈值

    lower_green = np.array(c1)  # 深绿色的低阈值
    upper_green = np.array(c2)  # 深绿色的高阈值

    # 创建掩模
    mask = cv2.inRange(hsv, lower_green, upper_green)

    # 去噪声和增强黑板轮廓
    kernel = np.ones((5, 5), np.uint8)
    morphed = cv2.morphologyEx(mask, cv2.MORPH_CLOSE, kernel)

    # 使用开运算去除小区域
    kernel_open = np.ones((5, 5), np.uint8)
    morphed = cv2.morphologyEx(morphed, cv2.MORPH_OPEN, kernel_open)

    
    cv2.imshow('remove', morphed)

    # 找到轮廓
    contours, _ = cv2.findContours(morphed, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)

    # 遍历所有轮廓并绘制边界框
    for contour in contours:
        # 计算每个轮廓的面积
        area = cv2.contourArea(contour)
        x, y, w, h = cv2.boundingRect(contour)

        # 过滤掉不符合条件的轮廓
        if area > 1000:  # 设定一个最小轮廓面积
            # 在原图上绘制矩形框
            cv2.rectangle(image, (x, y), (x + w, y + h), (0, 255, 0), 2)


    # 遍历所有小黑板轮廓
    for contour in contours:
        area = cv2.contourArea(contour)
        if area > 500:  # 过滤掉较小的轮廓
            x, y, w, h = cv2.boundingRect(contour)

            # 提取小黑板区域
            blackboard_region = image[y:y + h, x:x + w]
            gray_region = cv2.cvtColor(blackboard_region, cv2.COLOR_BGR2GRAY)

            # 使用Canny边缘检测提取粉笔字
            edges = cv2.Canny(gray_region, 100, 200)

            # 将边缘图绘制到原图上
            # 创建一个与原图相同的空白图像
            colored_edges = cv2.cvtColor(edges, cv2.COLOR_GRAY2BGR)
        
            # 在原图上叠加边缘，使用加权平均的方式，调节透明度
            image[y:y + h, x:x + w] = cv2.addWeighted(image[y:y + h, x:x + w], 0.3, colored_edges, 0.7, 0)
    
    cv2.imshow('edges', image)
    
    # 按 'q' 键退出
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

# 释放摄像头资源
cap.release()
# 关闭所有 OpenCV 窗口
cv2.destroyAllWindows()