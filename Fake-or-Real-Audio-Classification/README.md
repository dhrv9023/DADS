## Fake or Real Audio Classification
## Introduction

Fake audio can be used maliciously to spread misinformation. This project leverages Deep Learning techniques (Recurrent Neural Networks (RNN) with Long Short-Term Memory (LSTM)) to create a model capable of detecting fake audio. It provides a robust tool to combat audio-based misinformation by offering a reliable classification system.

This project proposes an automated solution to classify audio as real or fake. It includes the following steps-:

Preprocessing raw audio files using Librosa to extract meaningful features.
Training a robust model using TensorFlow.
Deploying a user-friendly interface for real-time testing using Streamlit.

## Features
Preprocessing: Extracts Mel-frequency cepstral coefficients (MFCC) and other audio features using Librosa.
Deep Learning Model: Leverages RNN (LSTM) to capture sequential audio patterns.
Interactive Interface: Provides real-time predictions using a web-based UI built with Streamlit.

## Model Workflow
- **Data Preprocessing**:
Audio files are processed into 2-second segments.
Librosa is used to extract features such as:
MFCC
Chroma
Mel Spectrogram
Features are normalized for input to the neural network.

- **Model Training**:
RNN (LSTM) is used for sequential pattern recognition.
TensorFlow is employed to build and train the model.

- **Model Evaluation**:
Evaluates performance on validation and testing datasets using metrics like accuracy, precision, recall, and F1-score.

- **Deployment**:
Streamlit is used to create an interactive interface for real-time predictions.

### Technologies Used
- **Python**: Primary programming language.
- **TensorFlow/Keras**: For building and training the LSTM model.
- **Librosa**: For audio feature extraction.
- **Streamlit**: For creating an interactive web-based interface.
- **Kaggle Datasets**: Dataset source.


### Dataset
#### Hierarchy :

'''
for-2sec
  ├── training
  │     ├── fake
  │     └── real
  ├── validation
  │     ├── fake
  │     └── real
  └── testing
        ├── fake
        └── real
'''

Dataset Link : https://www.kaggle.com/datasets/mohammedabdeldayem/the-fake-or-real-dataset

for-2sec(Dataset):Based on the for-norm folder, but truncated at 2 seconds.
