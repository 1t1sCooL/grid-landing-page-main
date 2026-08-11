pipeline {
    agent any

    environment {
        DOCKER_USER = '1t1scool'
        IMAGE_NAME  = 'grid-landing-page-main'
        IMAGE_TAG   = "${BUILD_NUMBER}"
        FULL_IMAGE  = "${DOCKER_USER}/${IMAGE_NAME}:${IMAGE_TAG}"
        LATEST_IMAGE = "${DOCKER_USER}/${IMAGE_NAME}:latest"
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Docker Build & Push') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'dockerhub',
                                                 usernameVariable: 'DOCKER_HUB_USER',
                                                 passwordVariable: 'DOCKER_HUB_PASSWORD')]) {
                    sh """
                        # Авторизация
                        echo "${DOCKER_HUB_PASSWORD}" | docker login -u "${DOCKER_HUB_USER}" --password-stdin

                        # Сборка по Dockerfile из репозитория
                        docker build -t ${FULL_IMAGE} -t ${LATEST_IMAGE} .

                        # Пуш в Docker Hub
                        docker push ${FULL_IMAGE}
                        docker push ${LATEST_IMAGE}
                    """
                }
            }
        }

        stage('Deploy') {
            steps {
                script {
                    if (fileExists('kubernetes/deployment.yaml')) {
                        sh "sed -i 's|image: .*|image: ${FULL_IMAGE}|g' kubernetes/deployment.yaml"
                    }

                    sh "kubectl apply -k kubernetes/"
                }
            }
        }
    }

    post {
        always {
            sh "docker logout"
            sh "docker rmi ${FULL_IMAGE} ${LATEST_IMAGE} || true"
        }
    }
}
