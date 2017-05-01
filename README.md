# Skyscanner Proxy

This is a proxy to simplify the access to the Skyscanner API

## Instructions

This API replaces the URL 'http://partners.api.skyscanner.net/apiservices/reference/v1.0' for the 'https://powerful-oasis-62593.herokuapp.com/' and add automatically the apiKey param requested

This means that the URL:

```
http://partners.api.skyscanner.net/apiservices/reference/v1.0/locales?apiKey={apiKey}
```

Is simplified into...

```
https://powerful-oasis-62593.herokuapp.com/locales
```

### More examples

```
Original API: "http://partners.api.skyscanner.net/apiservices/reference/v1.0/countries/{locale}?apiKey={apiKey}"

Proxy: https://powerful-oasis-62593.herokuapp.com/countries/{locale}

Example: https://powerful-oasis-62593.herokuapp.com/countries/es-ES
```