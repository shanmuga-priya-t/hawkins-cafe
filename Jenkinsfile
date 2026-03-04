pipeline {
    agent any

    environment {
        IMAGE_NAME = "shanmugapriya3442/hawkins-cafe:latest"
        DOCKER_USERNAME = "shanmugapriya3442"
        DOCKER_PASSWORD = "<your-docker-password>"  // Replace with your Docker Hub password
    }

    stages {
        stage('Checkout SCM') {
            steps {
                git branch: 'main', url: 'https://github.com/shanmuga-priya-t/hawkins-cafe.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    bat 'docker build -t %IMAGE_NAME% ./client'
                }
            }
        }

        stage('Push Docker Image') {
            steps {
                script {
                    // Use default Docker context
                    bat 'docker context use default'
                    
                    // Docker login and push
                    bat 'docker login -u %DOCKER_USERNAME% -p %DOCKER_PASSWORD%'
                    bat 'docker push %IMAGE_NAME%'
                }
            }
        }

        stage('Deploy to AWS') {
            steps {
                echo "AWS Deploy stage placeholder – add your commands here"
                // Example:
                // bat 'aws ecs update-service ...'
            }
        }
    }

    post {
        success {
            echo 'Pipeline completed successfully!'
        }
        failure {
            echo 'Pipeline failed. Check logs!'
        }
    }
}
