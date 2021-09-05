import { Stack, StackProps } from 'aws-cdk-lib';
import { CodePipeline, CodePipelineSource, ShellStep } from 'aws-cdk-lib/lib/pipelines';
import { Construct } from 'constructs';

export class PipelineStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const pipeline = new CodePipeline(this, 'Pipeline', {
      pipelineName: 'aws-cdk-pipeline',
      synth: new ShellStep('Synth', {
        input: CodePipelineSource.connection('sonufrienko/aws-cdk-pipeline', 'main', {
          connectionArn:
            'arn:aws:codestar-connections:eu-west-1:707901487254:connection/1b9cdd03-b81a-4795-9bf0-b6355753f083',
        }),
        commands: ['npm ci', 'npm run build', 'npx cdk synth'],
      }),
    });
  }
}
