pipeline {
    agent any

    environment {
        DOCKERHUB_CREDENTIALS = 'dockerhub-cred' // Jenkins credential ID
        IMAGE_NAME = 'shanmugapriya3442/hawkins-cafe:latest'
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/shanmuga-priya-t/hawkins-cafe.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    docker.build("${IMAGE_NAME}", "./client")
                }
            }
        }

       pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git url: 'https://github.com/shanmuga-priya-t/hawkins-cafe.git', branch: 'main'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t shanmugapriya3442/hawkins-cafe:latest ./client'
            }
        }

        // ← Idha ippo podanum
        stage('Push Docker Image') {
            steps {
                script {
                    withDockerRegistry([credentialsId: 'db2a4830-5f69-43ab-ad82-95107b7bcfa4', url: 'https://index.docker.io/v1/']) {
                        sh 'docker push shanmugapriya3442/hawkins-cafe:latest'
                    }
                }
            }
        }

        stage('Deploy to AWS') {
            steps {
                echo 'AWS deploy step'
            }
        }
    }
}
        stage('Deploy to AWS') {
            steps {
                echo 'AWS EC2 deployment steps will go here'
            }
        }
    }
}
