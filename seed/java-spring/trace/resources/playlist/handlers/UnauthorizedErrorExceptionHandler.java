/**
 * This file was auto-generated by Fern from our API Definition.
 */

package resources.playlist.handlers;

import core.ErrorBody;
import java.lang.Object;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import resources.playlist.exceptions.UnauthorizedError;

@RestControllerAdvice
public final class UnauthorizedErrorExceptionHandler {
  @ExceptionHandler(UnauthorizedError.class)
  ResponseEntity<Object> handle(UnauthorizedError unauthorizedError) {
    ErrorBody body = new ErrorBody<>(UnauthorizedError.ERROR_NAME);
    return new ResponseEntity<>(body, null, UnauthorizedError.STATUS_CODE);
  }
}