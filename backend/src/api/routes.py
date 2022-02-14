from flask_restful import Api, Resource, fields

rest_api = Api(version="1.0", title="AudioVisual API")

fastaudio_model = rest_api.model('FastAudioModel', {
    "audioPath": fields.String(required=True),
    "scriptPath": fields.String(required=True),
    "outputPath": fields.String(required=True)
})

@rest_api.route('/api/fastaudio/generate')
class GenerateFastAudio(Resource):
    