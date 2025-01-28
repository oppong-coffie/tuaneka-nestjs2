import { Controller, Post, Body, Res, HttpStatus, Get } from '@nestjs/common';
// import { MessagingService } from './messaging.service';
import { Response } from 'express';

let latestPayload: any; // Variable to store the latest payload

@Controller('messaging')
export class MessagingController {
  @Post()
  async handleWebhook(
    @Body() payload: any,
    @Res() res: Response,
  ): Promise<void> {
    // Step 1: Log the incoming payload
    console.log('Webhook received:', JSON.stringify(payload, null, 2));
    latestPayload = payload; // Store the latest payload

    // Step 2: Respond to Botpress
    res.status(HttpStatus.OK).json({ status: 'success' });
  }

  @Get() // New endpoint to get the latest webhook response
  getLatestPayload(@Res() res: Response): void {
    if (!latestPayload) {
      res
        .status(HttpStatus.NO_CONTENT)
        .json({ message: 'No payload received yet' });
      console.log('No messages yet');
    } else {
      res.status(HttpStatus.OK).json(latestPayload);
    }
  }
}
