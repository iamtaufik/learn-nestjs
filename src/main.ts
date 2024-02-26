import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { EntityNotFoundExceptionFilter } from './filters/enttity-not-found-exception.filter';
import { EntityValidationFilter } from './filters/entity-validation.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('CourseHub API')
    .setDescription('The CourseHub API description')
    .setVersion('0.1')
    .addTag('users', 'Endpoints related to users')
    .addTag('courses', 'Endpoints related to courses')
    .build();

  app.useGlobalFilters(
    new EntityNotFoundExceptionFilter(),
    new EntityValidationFilter(),
  );

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);
  await app.listen(3000);
}
bootstrap();
