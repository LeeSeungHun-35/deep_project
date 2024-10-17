#CNN알고리즘 사용해서 가로,세로 64px 사이즈 / 32개의 필터를 3x3의 커널로 합성곱 연산을 진행

import cv2
import numpy as np
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Conv2D, MaxPooling2D, Flatten, Dense
from google.colab import files
import matplotlib.pyplot as plt
import seaborn as sns
import pandas as pd

def load_data(video_path):
    cap = cv2.VideoCapture(video_path)
    frames = []
    while True:
        ret, frame = cap.read()
        if not ret:
            break
        frame = cv2.resize(frame, (64, 64))
        frames.append(frame)
    cap.release()
    frames = np.array(frames)
    frames = frames / 255.0  # 정규화
    return frames

        # CNN
def create_model():
    model = Sequential()
    model.add(Conv2D(32, (3, 3), activation='relu', input_shape=(64, 64, 3)))  # 32개의 필터, 3x3 크기의 커널
    model.add(MaxPooling2D(pool_size=(2, 2)))
    model.add(Flatten())  # 2차원을 1차원으로 펼치기
    model.add(Dense(1, activation='sigmoid'))  # 출력층 - 이진 분류를 위한
    model.compile(optimizer='adam', loss='binary_crossentropy', metrics=['accuracy'])
    return model

uploaded = files.upload()      #여기서 사용자의 파일(영상)을 입력받음
video_path = list(uploaded.keys())[0]

frames = load_data(video_path)   # 비디오 데이터 로드된걸 프레임 수 계산
num_frames = frames.shape[0]

# 모델 생성/예측
model = create_model()
predictions = model.predict(frames)

frame_numbers = np.arange(1, num_frames + 1)  # 프레임 번호 만드는 부분

# 프레임별 예측 결과
for i, prediction in enumerate(predictions):                   # 프레임별 예측 결과
    print(f"Frame {i+1}: {'Deepfake' if prediction >= 0.5 else 'Real'} (Prediction: {prediction[0]:.2f})")

#프레임 생성
data = pd.DataFrame({
    'Frame': frame_numbers,
    'Prediction': predictions.flatten()
})

plt.figure(figsize=(12, 6))

sns.lineplot(data=data, x='Frame', y='Prediction', marker='o', color='blue', label='predict')
plt.axhline(y=0.5, color='red', linestyle='--', label='criterion')

# 그래프 만드는 부분ㄴ
plt.title('deepfake(predict)')
plt.xlabel('Frame')
plt.ylabel('Predict')
plt.xticks(frame_numbers)
plt.yticks(np.arange(0, 1.1, 0.1))
plt.ylim(0, 1)
plt.grid()
plt.legend()
plt.show()  