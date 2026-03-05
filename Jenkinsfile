pipeline {
    agent any

    environment {
        DOCKER_HUB_USERNAME = 'shanmugapriya3442'
        IMAGE_NAME = 'hawkins-cafe'
    }

    stages {

        stage('Build Docker Image') {
            steps {
                bat 'docker build -t %DOCKER_HUB_USERNAME%/%IMAGE_NAME%:latest ./client'
            }
        }

        stage('Push Docker Image') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'dockerhub', usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD')]) {
                    bat 'docker login -u %USERNAME% -p %PASSWORD%'
                    bat 'docker push %DOCKER_HUB_USERNAME%/%IMAGE_NAME%:latest'
                }
            }
        }

    }
}
