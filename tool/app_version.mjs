import { readFileSync } from 'node:fs';

const pubspec = readFileSync(new URL('../pubspec.yaml', import.meta.url), 'utf8');
const version = /^version:[ \t]*(\d+\.\d+\.\d+)\+\d+[ \t]*\r?$/m.exec(pubspec);
if (!version) throw new Error('Expected an app version and build number in pubspec.yaml');

export const appVersion = version[1];
