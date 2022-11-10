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
-   [Running a sample file](#Running-a-sample-file)
- [API Documentation](https://github.com/neptunelabs/fsi-server-api-client-js/wiki)

## About
FSI Server API Client JS offers developers a flexible interface to control the REST OpenAPI of FSI Server.

Uploading, deleting, modifying, creating and managing files and directory structures, as well as complex tasks can be easily accomplished using this high level API client. The FSI Server web interface uses the API client to communicate with FSI Server. You can see the API in action on this [demo FSI Server](https://demo.fsi-server.com/fsi/interface/).

This repo contains sample files to get you started developing projects with the FSI Server API client.

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

- run the following command to install the required packages:
```bash
npm install
```
- edit the file <b>/src/_FSIServerVars.ts</b> and enter the host and credentials of the FSI Server instance you want to use.

## Running a sample file


To run a samples type e.g.:
```bash
ts-node src/readMetaData.ts
```


### All Samples files are non-destructive
<b>No files on the configured FSI Server will be modified or deleted</b> upon executing a sample.<br/>
E.g. the delete.ts sample copies files to a temporary directory on FSI Server and deletes those files afterwards.<br/><br/>
The intention of the samples is just to provide you with a reference how to use the API in your own project. 

### Default directories
The file <b>/src/_FSIServerVars.ts</b> contains connectors and directories that are present on a stock FSI Server installation to make the samples run out of the box.<br/> 
You might want to change these directories or alternatively edit the paths in the sample file(s).

## API Documentation
Please refer to the API wiki for a [complete documentation](https://github.com/neptunelabs/fsi-server-api-client-js/wiki) of the API.
 