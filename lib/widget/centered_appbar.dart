import 'package:flutter/material.dart';
import 'package:contactmanager/colors/colors.dart';

class ContactManagerCenteredAppbar extends StatelessWidget
    implements PreferredSizeWidget {
  final Widget? title;
  final Color? backgroundColor;

  const ContactManagerCenteredAppbar({
    Key? key,
    this.title,
    this.backgroundColor,
  }) : super(key: key);

  @override
  Size get preferredSize => const Size.fromHeight(60.0);

  @override
  Widget build(BuildContext context) {
    return AppBar(
      backgroundColor: currentline,
      centerTitle: true,
      title: Row(
        mainAxisAlignment: MainAxisAlignment.center,
        textDirection: TextDirection.rtl,
        children: const <Widget>[
          Padding(
            padding: EdgeInsets.only(left: 1.0),
            child: Icon(
              Icons.person,
              color: purple,
            ),
          ),
          SizedBox(
            width: 5.0,
          ),
          Text(
            'اپلیکیشن مدیریت',
          ),
          SizedBox(
            width: 5.0,
          ),
          Text(
            'مخاطبین',
            style: TextStyle(
              color: purple,
              fontWeight: FontWeight.bold,
            ),
          ),
        ],
      ),
    );
  }
}
