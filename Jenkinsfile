pipeline {
    agent any

    environment {
        IMAGE_NAME = "shanmugapriya3442/hawkins-cafe:latest"
        DOCKER_USERNAME = "shanmugapriya3442"
        DOCKER_PASSWORD = "<thirumurugan>"  // Replace with your Docker Hub password
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
                    bat 'docker build -t shanmugapriya3442/hawkins-cafe:latest ./client'
                }
            }
        }

        stage('Push Docker Image') {
            steps {
                script {
                    // Use default Docker context
                    bat 'docker context use default'
                    
                    // Docker login and push
                    bat 'docker login -u shanmugapriya3442 -p thirumurugan'
                    bat 'docker push shanmugapriya3442/hawkins-cafe:latest'
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
