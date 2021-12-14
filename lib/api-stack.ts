import { Stack, StackProps } from 'aws-cdk-lib';
import { Function, InlineCode, Runtime } from 'aws-cdk-lib/aws-lambda';
import { Construct } from 'constructs';

export class ApiStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    new Function(this, 'DemoFunction', {
      runtime: Runtime.NODEJS_14_X,
      handler: 'index.handler',
      code: new InlineCode('exports.handler = _ => "Hello, CDK";'),
    });
  }
}
