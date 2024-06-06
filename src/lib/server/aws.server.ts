import { env } from '$env/dynamic/private';
import { S3Client, type S3ClientConfig } from '@aws-sdk/client-s3';
import { DynamoDBClient, type DynamoDBClientConfig } from '@aws-sdk/client-dynamodb';

export const dynamoDbClient = new DynamoDBClient({
  region: env.CUSTOM_AWS_REGION,
  credentials: {
    accessKeyId: env.CUSTOM_AWS_ACCESS_KEY_ID,
    secretAccessKey: env.CUSTOM_AWS_SECRET_ACCESS_KEY
  }
} as DynamoDBClientConfig);

export const s3Client = new S3Client({
  region: env.CUSTOM_AWS_REGION,
  credentials: {
    accessKeyId: env.CUSTOM_AWS_ACCESS_KEY_ID,
    secretAccessKey: env.CUSTOM_AWS_SECRET_ACCESS_KEY
  }
} as S3ClientConfig);
