package com.campoo.controller;


import lombok.extern.log4j.Log4j;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("campoo/api/events")
public class EventsController {

    @RequestMapping(value="/", method = RequestMethod.GET)
    public String getFirstInfo() {
        return "hello";
    }
}
