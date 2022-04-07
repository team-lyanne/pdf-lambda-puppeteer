import { APIGatewayProxyHandler } from "aws-lambda";
import { PDFGenerator } from "./src/PDFGenerator";

export const buildReport: APIGatewayProxyHandler = async (event, _context) => {
  const response = await PDFGenerator.buildReport(event);
  return response;
};
