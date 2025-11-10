pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/KanjiZain/react-prac-redux'
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
