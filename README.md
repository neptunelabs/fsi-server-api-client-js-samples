<div>
    <a href="https://github.com/neptunelabs/fsi-server-api-client-js">
        <img width="200" height="70" src="https://fsi-site.neptunelabs.com/fsi/static/assets/logos/fsi_server.svg" alt="FSI Server">
    </a>
</div>

# Samples for FSI Server API Client JS



## Table of Contents

-   [About](#about)
-   [How to install](#how-to-install)
-   [Preperation](#Preperation)
-   [Running a sample file](#Running a sample file)

## About
FSI Server API Client JS offers developers a flexible interface to control the REST OpenAPI of FSI server.

Uploading, deleting, modifying, creating and managing files and directory structures, as well as complex tasks can be easily accomplished using this high level API client. The FSI Server web interface uses the API client to communicate with FSI Server. You can see the API in action on this [demo FSI Server](https://demo.fsi-server.com/fsi/interface/).

This repo contains sample files to get you going developing projects with the API.



## How to install

Install with npm:

```bash
npm install @neptunelabs/fsi-server-api-client-samples
```

Install with yarn:

```bash
yarn add @neptunelabs/fsi-server-api-client-samples
```
## Preperation

- edit the file <b>/src/_FSIServerVars.ts</b> and enter the host and credentials of the FSI Server instance you want to use.
- run the following commands in the samples/src folder to compile the samples:
```bash
npm i
```

## Running a sample file


To run a samples type e.g.:
```bash
ts-node src/readMetaData.ts
```
<br/>

#### All Samples files as are non-destructive
This is: <b>no files on FSI Server will be modified or deleted</b> upon executing a sample.<br/>
E.g. the delete.ts copies files to a temporary directory and deletes those files afterwards.

#### Default directories
The file <b>/src/_FSIServerVars.ts</b> contains connectors and directories that are present on a stock FSI Server installation to make the samples run out of the box.<br/> 
You might want to change these directories or edit the paths in the sample file(s).