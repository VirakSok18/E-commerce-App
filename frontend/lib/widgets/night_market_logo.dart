import 'package:flutter/material.dart';

class NightMarketLogoWidget extends StatelessWidget {
  final double size;
  final bool showText;
  final bool darkText;

  const NightMarketLogoWidget({
    super.key,
    this.size = 38.0,
    this.showText = true,
    this.darkText = true,
  });

  @override
  Widget build(BuildContext context) {
    return Row(
      mainAxisSize: MainAxisSize.min,
      crossAxisAlignment: CrossAxisAlignment.center,
      children: [
        // Brand Mark: Rounded Navy container with Orange Shopping Bag and White Accent
        Container(
          width: size,
          height: size,
          decoration: BoxDecoration(
            color: const Color(0xFF2C3E50),
            borderRadius: BorderRadius.circular(size * 0.28),
            boxShadow: [
              BoxShadow(
                color: const Color(0xFF2C3E50).withOpacity(0.25),
                blurRadius: 8,
                offset: const Offset(0, 3),
              ),
            ],
          ),
          child: Stack(
            alignment: Alignment.center,
            children: [
              Icon(
                Icons.shopping_bag_rounded,
                color: const Color(0xFFFF6B35),
                size: size * 0.58,
              ),
              Positioned(
                top: size * 0.20,
                right: size * 0.20,
                child: Container(
                  width: size * 0.16,
                  height: size * 0.16,
                  decoration: const BoxDecoration(
                    color: Colors.white,
                    shape: BoxShape.circle,
                  ),
                ),
              ),
            ],
          ),
        ),

        if (showText) ...[
          const SizedBox(width: 10),
          Column(
            mainAxisSize: MainAxisSize.min,
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Row(
                mainAxisSize: MainAxisSize.min,
                children: [
                  const Text(
                    'NIGHT',
                    style: TextStyle(
                      fontSize: 16,
                      fontWeight: FontWeight.w900,
                      color: Color(0xFFFF6B35),
                      letterSpacing: 0.8,
                    ),
                  ),
                  const SizedBox(width: 4),
                  Text(
                    'MARKET',
                    style: TextStyle(
                      fontSize: 16,
                      fontWeight: FontWeight.w900,
                      color: darkText ? const Color(0xFF2C3E50) : Colors.white,
                      letterSpacing: 0.8,
                    ),
                  ),
                ],
              ),
              Text(
                'MOBILE STORE',
                style: TextStyle(
                  fontSize: 8.5,
                  fontWeight: FontWeight.w700,
                  color: darkText
                      ? const Color(0xFF09090B).withOpacity(0.55)
                      : Colors.white.withOpacity(0.7),
                  letterSpacing: 1.5,
                ),
              ),
            ],
          ),
        ],
      ],
    );
  }
}
