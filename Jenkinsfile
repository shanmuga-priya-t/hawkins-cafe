pipeline {
    agent any
    
    environment {
        AWS_ACCESS_KEY_ID = 'YOUR_AWS_ACCESS_KEY_ID'   // AWS Access Key ID
        AWS_SECRET_ACCESS_KEY = credentials('aws-secret-key')  // Jenkins la add pannirutha Secret Key
    }
    
    stages {
        stage('Build Docker Image') {
            steps {
                bat 'docker build -t shanmugapriya3442/hawkins-cafe:latest ./client'
            }
        }
        stage('Push Docker Image') {
            steps {
                bat 'docker push shanmugapriya3442/hawkins-cafe:latest'
            }
        }
    }
}
