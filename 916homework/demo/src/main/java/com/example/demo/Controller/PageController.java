package com.example.demo.Controller;

import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PageController {

    // Initial basic endpoint version that just returns a string, no http status
//    @GetMapping("/hello")
//    public String getMessage() {
//        return "Message retrieved from API endpoint successfully";
//    }

    @GetMapping("/hello")
    public ResponseEntity<String> getHello() {
        return ResponseEntity.ok("Message with response status retrieved from API endpoint successfully");
    }


}
