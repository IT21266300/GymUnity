package com.social;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Info;

@SpringBootApplication
@OpenAPIDefinition(info = @Info(title = "Twitter Api",description = "Social Media App"))
public class GymUnityApplication {

	public static void main(String[] args) {
		SpringApplication.run(GymUnityApplication.class, args);
	}

}
