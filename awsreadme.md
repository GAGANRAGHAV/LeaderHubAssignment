# Deployment to AWS

## Elastic Beanstalk Deployment

1. **Initialize Elastic Beanstalk**:
   - Run `eb init` to configure your application with AWS Elastic Beanstalk.

2. **Push Docker Image to Docker Hub**:
   - Build and push the Docker image to your Docker Hub repository.

3. **Create `Dockerrun.aws.json`**:
   - Specify the Docker image and container configuration.

4. **Deploy to Elastic Beanstalk**:
   - Run `eb create` to create a new Elastic Beanstalk environment.
   - The application will be accessible via the Elastic Beanstalk URL.


