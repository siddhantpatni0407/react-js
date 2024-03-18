# Kafka Utilty App - kafka-utility-app

Kafka Utilty App is a web application built with ReactJS for managing kafka server. 
It allows users to Start / Stop Server, Create Topic, Get All Topic, Delete Topic, Send Message to Topic, Send Event to Topic.

## Backend Application: spring-boot-kafka-service

The backend application, named `spring-boot-kafka-service`, provides the following endpoints:

- **Start Server:** POST `/api/v1/kafka-service/kafka/start-server`
- **Stop Server:** GET `/api/v1/kafka-service/kafka/stop-server`
- **Create Topic:** POST `/api/v1/kafka-service/kafka/topic?topicName={topic-name}&partition={parititio-number}`
- **Get All Topic:** GET `/api/v1/kafka-service/kafka/topic`
- **Delete Topic:** DELETE `/api/v1/kafka-service/kafka/topic?topicName={topic-name}`
- **Delete Kafka Logs:** DELETE `/api/v1/kafka-service/kafka/logs`
- **Sent message to Topic:** GET `/api/v1/kafka-service/publish?message={message}`
- **Sent event to Topic:** POST `/api/v1/kafka-service/publish`

Backend Code Repository URL:

```bash
git clone https://github.com/siddhantpatni0407/spring-boot-microservices.git
```
