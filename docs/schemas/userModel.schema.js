/**
 * @openapi
 * components:
 *   schema:
 *     sign-up:
 *       type: object
 *       properties:
 *         first_name:
 *           type: string
 *           example: Miguel
 *         last_name:
 *           type: string
 *           example: Martinez
 *         email:
 *           type: string
 *           example: 201808724@p.uapa.edu.do
 *         password:
 *           type: string
 *           example: 12345
 *     login:
 *       type: object
 *       properties:
 *         email:
 *           type: string
 *           example: 201808724@p.uapa.edu.do
 *         password:
 *           type: string
 *           example: 12345
 *     loginResponse:
 *       type:
 *         object
 *       properties:
 *         email:
 *           type: string
 *           example: 201808724@p.uapa.edu.do
 *         token:
 *           type: string
 *           example: JzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ
 *     forget-password:
 *       type: object
 *       properties:
 *         email:
 *           type: string
 *           example: 201808724@p.uapa.edu.do
 *     change-password:
 *       type: object
 *       properties:
 *         password:
 *           type: string
 *           example: 123545
 *     meGet:
 *       type: object
 *       properties:
 *         token:
 *           type: string
 *           example: JzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ
 *     responseMe:
 *       type:
 *         object
 *       properties:
 *         id:
 *           oneOf:
 *             - type: string
 *             - type: integer
 *            example: 548263ca-b792-4129-a050-2fc01955k94l
 *         first_name:
 *           type: string
 *           example: Rodrigo
 *         last_name:
 *           type: string
 *           example: Miranda
 *         email:
 *           type: string
 *           example: rodrydanielmir@gmail.com
 *         username:
 *           type: string
 *           example: rodrydanielmir@gmail.com
 *         image_url:
 *           type: null
 *     profilesMe:
 *       type:
 *         object
 *       properties:
 *         id:
 *           type: integer
 *           example: 1
 *         user_id:
 *           oneOF:
 *             - type: integer
 *             - type: string
 *           example: 740273ca-b792-4129-a050-2fc01957k94l
 *         role_id:
 *           type: integer
 *           example: 1
 *         created_at:
 *           type: date-time
 *           example: 2023-02-17 05:56:07.362+01
 *         updated_at:
 *           type: date-time
 *         example: 2023-02-17 05:56:07.362+01
 *     get-all-users:
 *       type: object
 *       properties:
 *         result:
 *           type: object
 *           properties:
 *             count:
 *               type: integer
 *               example: 4
 *             totalPages:
 *               type: integer
 *               example: 2
 *             currentPage:
 *               type: integer
 *               example: 1
 *             results:
 *               type: array
 *               example: [ { "id": "fa76359b-e635-4490-ba8c-eb5db134b4fd", "first_name": "Miguel", "last_name": "Martinez", "email": "201908724@p.uapa.edu.do", "username": "201908724@p.uapa.edu.do", "email_verified": null, "code_phone": null, "phone": null, "country_id": null, "image_url": null, }, { "id": "7013c635-af3c-4758-8f57-40e52613fd7b", "first_name": "User", "last_name": "Public", "email": "example2@academlo.com", "username": "example2@email.com", "email_verified": null, "code_phone": null, "phone": null, "country_id": null, "image_url": null, }, { "id": "4845067d-abdf-4e01-8a6c-1eaff27368c7", "first_name": "Rodrigo", "last_name": "Miranda", "email": "rodigm@gmail.com", "username": "rodrigm@gmail.com", "email_verified": null, "code_phone": null, "phone": null, "country_id": null, "image_url": null } ]
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 * 
 */