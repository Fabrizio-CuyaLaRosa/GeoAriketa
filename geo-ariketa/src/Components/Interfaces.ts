export interface PlayerData {
  allianceId: number
  allianceRole: string
  charges: {
    cooldownMs: 30000,
    count: 1217.26386666667,
    max: 3154
  },
  country: string
  discord: string
  discordId: number
  droplets: number
  equippedFlag: number
  equippedFrameId: number
  equippedFrameUrl: string
  experiments: experiments
  extraColorsBitmap: number
  favoriteLocations: Locations[]
  flagsBitmap: string
  freeFlag: boolean
  id: number
  isCustomer: boolean
  level: number
  maxFavoriteLocations: number
  name: string
  needsPhoneVerification: boolean
  picture: string
  pixelsPainted: number
  role: string
  showLastPixel: boolean
  timeoutUntil: Date
}

export interface Locations {
  id: number
  name: string
  latitude: number
  longitude: number
}

interface experiments {
  "2025-09_discord_linking": {
    enabled: boolean;
  }
  "2025-09_pawtect": {
    variant: string
  }
}