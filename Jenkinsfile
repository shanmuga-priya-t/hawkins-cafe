pipeline {
    agent any
    
    environment {
        AWS_ACCESS_KEY_ID = credentials('AKIATXOFRFAXAWUM2M4R')   // Jenkins la add pannirutha AWS Access Key ID
        AWS_SECRET_ACCESS_KEY = credentials('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')  // Jenkins Secret Text ID
        DOCKER_HUB_PASSWORD = credentials('thirumurugan') // Jenkins Secret Text ID for Docker Hub
    }
    
    stages {
        stage('Build Docker Image') {
            steps {
                bat 'docker build -t shanmugapriya3442/hawkins-cafe:latest ./client'
            }
        }
        stage('Push Docker Image') {
            steps {
                bat 'docker login -u shanmugapriya3442 -p thirumurugan'
                bat 'docker push shanmugapriya3442/hawkins-cafe:latest'
            }
        }
    }
}
