pipeline {
    agent any



    environment {
        DOCKER_IMAGE = "react-app:latest"
        CONTAINER_NAME = "react-container"
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/KanjiZain/react-prac-redux'
            }
        }

        stage('Install Dependencies & Build') {
            steps {
                sh '''
                npm install
                npm run build
                '''
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t $DOCKER_IMAGE .'
            }
        }

        stage('Run Docker Container') {
            steps {
                sh '''
                if [ "$(docker ps -aq -f name=$CONTAINER_NAME)" ]; then
                  docker stop $CONTAINER_NAME || true
                  docker rm $CONTAINER_NAME || true
                fi

                # Run new container, exposing host port 3000 to container port 80
                docker run -d -p 3000:80 --name $CONTAINER_NAME $DOCKER_IMAGE
                '''
            }
        }
    }

    post {
        success {
            echo '✅ React app deployed successfully via Docker!'
        }
        failure {
            echo '❌ Build failed. Check Jenkins logs.'
        }
    }
}
