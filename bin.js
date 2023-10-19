#!/usr/bin/env node

import { spawn } from 'node:child_process';
import { cwd, env, exit } from 'node:process';

spawn('npx', ['postdoc', 'init'], {
	cwd: cwd(),
	env,
	shell: true
})
	.on('error', () => exit(1))
	.on('exit', () => exit(0));
