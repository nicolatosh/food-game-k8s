package com.matchservice.matchservice.config;

public class DataSourceRoutes {
    private static final String ADAPTER_URL = System.getenv("RECIPES_ROUTE"); 
    private static final String ADAPTER_PORT = "5000";
    public static final String INGREDIENTS_URL= ADAPTER_URL + "/ingredients";
    public static final String RECIPES_URL= ADAPTER_URL + "/recipes";

    private DataSourceRoutes(){

    }
}
