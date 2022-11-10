/*
    SAMPLE
    -----------------------------------------------------
    copying multiple files and/or folders

    Usage:
    ts-node src/copy.ts

 */

// PLEASE NOTE: you need to enter the FSI Server credentials in this file
import {_FSIServerVars} from "./_FSIServerVars";
const serverVars = new _FSIServerVars();

import {FSIServerClient, LogLevel} from "@neptunelabs/fsi-server-api-client";

const client = new FSIServerClient(serverVars.host);
client.setLogLevel(LogLevel.info);
client.setProgressFunction(FSIServerClient.defaultProgress);
client.setPromptFunction(FSIServerClient.defaultPrompt);

const queue = client.createQueue({continueOnError: true});

// start session
queue.login(serverVars.userName, serverVars.passWord);

// get files and folder list
queue.listServer(serverVars.sampleConnector, {recursive: true});

// copy the batch entries to a temporary directory
queue.batchCopy(serverVars.getTempDir());

// close session
queue.logout();

// run the queued commands
queue.runWithResult();
