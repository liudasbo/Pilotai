export function apiSuccess(data, status = 200) {
  return Response.json(
    {
      ok: true,
      data,
    },
    { status }
  );
}

export function apiError({ code, message, fieldErrors }, status = 400) {
  return Response.json(
    {
      ok: false,
      error: {
        code,
        message,
        ...(fieldErrors ? { fieldErrors } : {}),
      },
    },
    { status }
  );
}
