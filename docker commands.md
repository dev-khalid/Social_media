#To build the image from the dockerfile we need to execute the following comman 
    >docker build -t <NameOfTheImage>
#To run the container from an image: 
    >docker run -p port_that_will_be_accessed_from_outside_of_the_container:exposed_port_from_docker_container -d <TargetImage>
#To check all the images 
    >docker images || 
    >docker image ls [ls is short from of list]
#To check all the running containers 
    >docker ps -a 
#To remove image 
    >docker rmi -f <ImageName || ImageId>
    >docker rm -f <ContainerName || ContainerId>
