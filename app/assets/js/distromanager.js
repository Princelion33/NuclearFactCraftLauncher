const { DistributionAPI } = require('helios-core/common')

const ConfigManager = require('./configmanager')

// Old WesterosCraft url.
// exports.REMOTE_DISTRO_URL = 'https://node90-eu.n0c.com:4443/fb/npubwwyj/files/nebula/distribution.json'
exports.REMOTE_DISTRO_URL = 'https://node90-eu.n0c.com:4443/fb/npubwwyj/files/nebula/distribution.json'

const api = new DistributionAPI(
    ConfigManager.getLauncherDirectory(),
    null, // Injected forcefully by the preloader.
    null, // Injected forcefully by the preloader.
    exports.REMOTE_DISTRO_URL,
    false
)

exports.DistroAPI = api