import type { PageServerLoad } from '@sveltejs/kit';
import { dynamoDbClient } from "$lib/server/aws.server";
import { DynamoDBDocument } from "@aws-sdk/lib-dynamodb";


export const load: PageServerLoad = async ({ params }) => {
    return {
        data: await DynamoDBDocument.from(dynamoDbClient).get(
            {
                TableName: 'musiclinks',
                Key: {
                    id: params.slug
                }
            }
        ),
    };
};