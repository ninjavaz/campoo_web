FROM  maven:3.6.3-openjdk-15 AS builder

ARG WORK_DIR=/home/ninjavas/campoo_web/campoo-zuul

MAINTAINER Dominik Nuszkiewicz <dknuszkiewicz@gmail.com>

COPY src ${WORK_DIR}/src
#COPY pom.xml ${WORK_DIR}/pom.xml dependency:go-offline

ENV MAVEN_OPTS=-Dhttps.protocols=TLSv1,1,TLSv1.2
RUN mvn -f ${WORK_DIR}/pom.xml clean package -DskipTests


# Deploy container
FROM openjdk:15

# Variables
ARG WORK_DIR=/campoo-zuul
ARG CONF_DIR=${WORK_DIR}/src/main/resources/
ARG JAR_FILE=target/*.jar
ARG CFG_FILE=application.yml
#ARG LOG_CFG=logback.xml
ARG SVC_NAME=campoo-zuul


COPY --from=builder /home/app/${JAR_FILE} ${WORK_DIR}/${SVC_NAME}.jar
#ADD ${CFG_FILE} ${WORK_DIR}/src/main/resources/application.yml
CMD ls -al
#ADD ${LOG_CFG} ${WORK_DIR}/config/logback.xml


#ADD target/campoo-zuul.jar campoo-zuul.jar
ENTRYPOINT ["java", "-jar", "${WORK_DIR}/${SVC_NAME}.jar", "--spring.config.location=${CONF_DIR}/application.yml"]
EXPOSE 8762