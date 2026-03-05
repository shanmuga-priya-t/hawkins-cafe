pipeline {
agent any

```
environment {
    AWS_DEFAULT_REGION = 'ap-south-1'
    IMAGE_NAME = 'hawkins-cafe'
    DOCKER_HUB_USERNAME = 'shanmugapriya3442'
}

stages {

    stage('Clone Repository') {
        steps {
            git branch: 'main', url: 'https://github.com/shanmuga-priya-t/hawkins-cafe.git'
        }
    }

    stage('Build Docker Image') {
        steps {
            bat 'docker build -t %DOCKER_HUB_USERNAME%/%IMAGE_NAME% .'
        }
    }

    stage('Login to DockerHub') {
        steps {
            withCredentials([usernamePassword(credentialsId: 'dockerhub-credentials', usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD')]) {
                bat 'docker login -u %USERNAME% -p %PASSWORD%'
            }
        }
    }

    stage('Push Image to DockerHub') {
        steps {
            bat 'docker push %DOCKER_HUB_USERNAME%/%IMAGE_NAME%'
        }
    }

    stage('Deploy Container') {
        steps {
            bat '''
            docker stop hawkins-cafe-container || exit 0
            docker rm hawkins-cafe-container || exit 0
            docker run -d -p 80:80 --name hawkins-cafe-container %DOCKER_HUB_USERNAME%/%IMAGE_NAME%
            '''
        }
    }
}
```

}
