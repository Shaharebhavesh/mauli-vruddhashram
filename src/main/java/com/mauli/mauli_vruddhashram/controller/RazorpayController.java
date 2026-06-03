package com.mauli.mauli_vruddhashram.controller;

import com.razorpay.Order;
import com.razorpay.RazorpayClient;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/payment")
public class RazorpayController {

    @Value("${razorpay.key}")
    private String key;

    @Value("${razorpay.secret}")
    private String secret;

    @PostMapping("/create-order")
    public String createOrder(
            @RequestParam Integer amount)
            throws Exception {

        RazorpayClient client =
                new RazorpayClient(key, secret);

        JSONObject orderRequest =
                new JSONObject();

        orderRequest.put(
                "amount",
                amount * 100);

        orderRequest.put(
                "currency",
                "INR");

        orderRequest.put(
                "receipt",
                "donation_" +
                        System.currentTimeMillis());

        Order order =
                client.orders.create(orderRequest);

        return order.toString();
    }
}
