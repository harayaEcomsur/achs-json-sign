const { signJson, verifyToken } = require('./JsonSigner');

test('token generado y que mantiene su integridad es validado correctamente', () => {
    const originalJson = { key: 'value' };
    const token = signJson(originalJson);
    const verifiedJson = verifyToken(token);

    // Remover la propiedad iat antes de la comparación
    delete verifiedJson.iat;

    expect(verifiedJson).toEqual(originalJson);
});

test('token generado que es mutado es validado y retorna nulo', () => {
    const originalJson = { key: 'value' };
    const token = signJson(originalJson);

    // Mutar el token
    const mutatedToken = token.replace(/\w$/, 'x');

    const verifiedJson = verifyToken(mutatedToken);

    expect(verifiedJson).toBeNull();
});

