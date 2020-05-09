# manager-invocation-demo

This repo demonstrates that component managers are instantiated once per base
class (not once per-manager association).

Steps to repro:

* clone the repo
* `npm ci`
* `npm start`
* navigate to the running server (generally `http://localhost:4200/`)
* open the the console
* see "created manager" listed twice
