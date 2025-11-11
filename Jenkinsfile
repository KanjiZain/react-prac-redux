pipeline {
    agent any 

    environment {
        DEPLOY_BRANCH = 'main'
    }

    stages {
        stage("Verify Branch") {
            when {
                expression { return env.GIT_BRANCH ==~ /.*${DEPLOY_BRANCH}$/ }
            }
            steps {
                echo "✅ Triggered on correct branch: ${env.GIT_BRANCH}"
            }
        }



        stage("Stop and Remove Old Container") {
            when {
                expression { return env.GIT_BRANCH ==~ /.*${DEPLOY_BRANCH}$/ }
            }
            steps {
                script {
                    sh 'docker stop react-frontend || true'  
                    sh 'docker rm -f react-frontend || true'
                    sh 'docker rmi -f react-frontend:latest || true'
                }
            }
        }

        stage("Building Docker Container") {
            when {
                expression { return env.GIT_BRANCH ==~ /.*${DEPLOY_BRANCH}$/ }
            }
            steps {
                script {
                    sh 'docker build --no-cache -t react-frontend:latest .' 
                }
            }
        }

        stage("Deploy New Container") {
            when {
                expression { return env.GIT_BRANCH ==~ /.*${DEPLOY_BRANCH}$/ }
            }
            steps {
                script {
                    sh 'docker run -d -p 3000:3000 --name react-frontend react-frontend:latest'
                }
            }
        }

        stage("Cleanup") {
            when {
                expression { return env.GIT_BRANCH ==~ /.*${DEPLOY_BRANCH}$/ }
            }
            steps {
                script {
                    sh 'docker image prune -a --force'
                    sh 'docker system prune -a -f'
                }
            }
        }

        stage("Pipeline Finished") {
            when {
                expression { return env.GIT_BRANCH ==~ /.*${DEPLOY_BRANCH}$/ }
            }
            steps {
                echo "✅ Pipeline execution finished for ${DEPLOY_BRANCH}"
            }
        }
    }
}