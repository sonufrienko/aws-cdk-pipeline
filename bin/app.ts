#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { PipelineStack } from '../lib/pipeline-stack';

const app = new cdk.App();
new PipelineStack(app, 'MyPipelineStack', {
  env: {
    account: '707901487254',
    region: 'eu-west-1',
  },
});

app.synth();
