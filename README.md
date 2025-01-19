# Node.js Server Graceful Shutdown

This repository demonstrates a common issue in Node.js where servers fail to shut down gracefully when interrupted (e.g., using Ctrl+C).  The `server.js` file shows the problematic code, while `serverSolution.js` provides a solution using `server.close()` and event listeners.

## Problem

The initial server implementation lacks proper handling for termination signals, resulting in a hang when the server is stopped forcefully. This can lead to resource leaks and prevent clean application exit.

## Solution

The improved version incorporates `server.close()` to ensure the server handles pending requests before terminating and `process.on('SIGINT', ...)` to gracefully shut down upon receiving a Ctrl+C signal.