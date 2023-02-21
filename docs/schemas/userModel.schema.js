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
 *     responseMe:
 *       type:
 *         object
 *       properties:
 *         id:
 *           oneOf:
 *             - type: string
 *             - type: integer
 *           example: 740273ca-b792-4129-a050-2fc01957d94d
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
 *     get-all:
 *       type: object
 *       properties:
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
 *           example: Rodrigo
 *     get-user-by-id:
 *       type: object
 *       properties:
 *         id:
 *         email:
 *           type: string
 *           example: 201808724@p.uapa.edu.do
 *         password:
 *           type: string
 *           example: 12345
 */