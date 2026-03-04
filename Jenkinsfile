pipeline {
    agent any

    environment {
        DOCKER_IMAGE = "shanmugapriya3442/hawkins-cafe:latest"
        DOCKER_CREDENTIALS = "db2a4830-5f69-43ab-ad82-95107b7bcfa4" // Jenkins maadhiri Docker Hub credentials id
        AWS_CREDENTIALS = "aws-cred"          // AWS credentials id
        AWS_REGION = "ap-south-1"             // AWS region
        ECR_REPO = "hawkins-cafe"             // AWS ECR repository name
    }

    stages {

        stage('Checkout SCM') {
            steps {
                // Windows-compatible git checkout
                checkout([$class: 'GitSCM', 
                          branches: [[name: '*/main']],
                          userRemoteConfigs: [[url: 'https://github.com/shanmuga-priya-t/hawkins-cafe.git']]
                ])
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    // Windows-compatible command
                    bat "docker build -t %DOCKER_IMAGE% ./client"
                }
            }
        }

        stage('Push Docker Image') {
            steps {
                script {
                    // Docker Hub login and push using credentials
                    withDockerRegistry([credentialsId: "%DOCKER_CREDENTIALS%", url: 'https://index.docker.io/v1/']) {
                        bat "docker push %DOCKER_IMAGE%"
                    }
                }
            }
        }

        stage('Deploy to AWS') {
            steps {
                script {
                    echo "AWS deploy stage placeholder"
                    // idhu laam unga AWS deploy commands use pannunga
                    // Example:
                    // bat "aws ecs update-service --cluster myCluster --service myService --force-new-deployment --region %AWS_REGION%"
                }
            }
        }
    }

    post {
        success {
            echo "Pipeline completed successfully!"
        }
        failure {
            echo "Pipeline failed. Check logs!"
        }
    }
}
