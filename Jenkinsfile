pipeline {
    agent any

    environment {
        DOCKER_IMAGE = "shanmugapriya3442/hawkins-cafe:latest"
        DOCKER_CREDENTIALS = "dockerhub-cred"
    }

    stages {

        stage('Checkout') {
            steps {
                git url: 'https://github.com/shanmuga-priya-t/hawkins-cafe.git', branch: 'main'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    sh "docker build -t ${DOCKER_IMAGE} ./client"
                }
            }
        }

        stage('Push Docker Image') {
            steps {
                script {
                    withDockerRegistry([credentialsId: "${DOCKER_CREDENTIALS}", url: 'https://index.docker.io/v1/']) {
                        sh "docker push ${DOCKER_IMAGE}"
                    }
                }
            }
        }

        stage('Deploy to AWS') {
            steps {
                echo 'AWS deploy step - add your deployment commands here'
            }
        }

    } // stages
} // pipeline
