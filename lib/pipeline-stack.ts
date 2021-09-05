import { Stack, StackProps } from 'aws-cdk-lib';
import { CodePipeline, CodePipelineSource, ShellStep } from 'aws-cdk-lib/lib/pipelines';
import { Construct } from 'constructs';

export class PipelineStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const pipeline = new CodePipeline(this, 'Pipeline', {
      pipelineName: 'aws-cdk-pipeline',
      synth: new ShellStep('Synth', {
        input: CodePipelineSource.gitHub('sonufrienko/aws-cdk-pipeline', 'main'),
        commands: ['npm ci', 'npm run build', 'npx cdk synth'],
      }),
    });
  }
}
